import  { ReactNode } from "react";
// old  before react 18  , now we cannot do it
// export const Section: React.FC<{ title: string }> = ({ children, title }) => { // here implicit  مخفي  definition of the type
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

// explicit صريح  definition of the type
// children  different than props
type SectionProps = {
  title?: string; // optional props so i need to declare a default value 
  children: ReactNode; // required 
};

export const Section = ({ children, title ="my Subheading" }: SectionProps) => { // de-structured props 
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
