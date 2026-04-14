// TODO: Make this component polymorphic.
// The `as` prop should accept any valid HTML element type (e.g. 'a', 'button', 'span').
// The remaining props should be inferred from the resolved element —
// for example, if as="a" then `href` and `target` should autocomplete,
// if as="button" then `disabled` and `type` should autocomplete.
// Default `as` to 'a' when not provided.

import { boolean } from "zod";

type LinkProps<T extends React.ElementType> ={
  as?: T;
  variant?: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<T>, 'as' | 'variant' | 'className' | 'children'>

// `variant` should only accept 'default' | 'muted' | 'underline'.
function Link<T extends React.ElementType>({ as, variant, children, className, ...props }: LinkProps<T>) {
  const Component = as || 'a';

  const variantStyles: any = {
    default: 'text-blue-600 hover:text-blue-800',
    muted: 'text-gray-500 hover:text-gray-700',
    underline: 'text-blue-600 underline underline-offset-2 hover:text-blue-800',
  };

  return (
    <Component
      className={`inline-flex items-center gap-1 ${variantStyles[variant || 'default']} ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
}
const blabla = () => {
  return<Link as={'a'} variant=""> aaaa </Link>
}

export { Link };


type DrunkPerson ={
  drunk: boolean,
  smelly: boolean,
  drinkType: string,
  drinkNumber: number,
}

type SoberPerson = DrunkPerson & {
  canDrive: boolean
}

type PoliceCar ={
  onShift: boolean,
  numberOfArrests: number,
  driver: string,
  buddy: string,
}

type Officer <T extends SoberPerson | PoliceCar> ={
  properties: T
  hasColdBlood: boolean
}

const bastard: Officer<PoliceCar> = {
  hasColdBlood: true,
  properties: {
    onShift: false,
    numberOfArrests: 55,
    driver: "Mr. Castro",
    buddy: "Mr. Gillian"
  }
}

const drunkard: DrunkPerson ={
  drunk: true,
  smelly: true,
  drinkType: 'Bottles of Wine',
  drinkNumber: 5,
}


const driver: SoberPerson ={
  drunk: false,
  smelly: false,
  drinkType: 'Water',
  drinkNumber: 0,
  canDrive: true,
}

const cop: PoliceCar ={
  onShift: true,
  numberOfArrests: 10,
  driver: 'Mr. Lange',
  buddy: 'Mr. Armstrong',
}