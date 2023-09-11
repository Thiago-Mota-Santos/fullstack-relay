import { Theme } from '@radix-ui/themes';
import React from 'react';
import { RelayEnvironmentProvider, useRelayEnvironment } from 'react-relay';

type ProvidersProps = { children: React.ReactNode };

const Providers = ({ children }: ProvidersProps) => {
  const environment = useRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Theme>{children}</Theme>
    </RelayEnvironmentProvider>
  );
};

export default Providers;