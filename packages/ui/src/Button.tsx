import { Button as RadixButton } from '@radix-ui/themes';


const Button = (props:any) => {
  const { text = '', isSubmitting, ...restProps } = props;

  return (
    <RadixButton disabled={isSubmitting} {...restProps}>
      {isSubmitting ? 'loading' : text}
    </RadixButton>
  )

}



export default Button
