import type { NextComponentType, NextPage, NextPageContext } from 'next'
import React, { Suspense, useMemo } from 'react'
import { ReactRelayContext, useRelayEnvironment } from 'react-relay'

import Providers from '../components/providers/Providers'
import { createEnvironment } from './RelayEnvironment'

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export function ReactRelayContainer({
  Component,
  props,
}: {
  Component: NextComponentType<NextPageContext, any, any>
  props: any
}) {
  const environment = useMemo(() => createEnvironment(), [])
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <Suspense fallback={null}>
        <Hydrate Component={Component} props={props} />
      </Suspense>
    </ReactRelayContext.Provider>
  )
}

function Hydrate<T>({
  Component,
  props,
}: {
  Component: NextPageWithLayout<T>
  props: any
}) {
  const environment = useRelayEnvironment()

  const getLayout = Component.getLayout ?? ((page) => page)

  const transformedProps = useMemo(() => {
    if (props == null) {
      return props
    }
    // eslint-disable-next-line react/prop-types
    const { preloadedQueries, ...otherProps } = props
    if (preloadedQueries == null) {
      return props
    }

    const queryRefs: any = {}
    for (const [queryName, { params, variables, response }] of Object.entries(
      preloadedQueries,
    ) as any) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - seems to be a private untyped api
      environment.getNetwork().responseCache.set(params.id, variables, response)
      queryRefs[queryName] = {
        environment,
        fetchKey: params.id,
        fetchPolicy: 'store-or-network',
        isDisposed: false,
        name: params.name,
        kind: 'PreloadedQuery',
        variables,
      }
    }

    return { ...otherProps, queryRefs }
  }, [props])

  return <Providers>{getLayout(<Component {...transformedProps} />)}</Providers>
}
