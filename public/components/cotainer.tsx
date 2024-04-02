type ContainerProps = {
  children: React.ReactNode;
  customClass?: string;
};

const Container: React.FC<ContainerProps> = ({ children, customClass }) => {
  return (
    <div
      className={`
     max-w-[1920px]
     mx-auto
     xl:px-20
     md:px-2
     px-4
     ${customClass ? customClass : ""}
     `}
    >
      {children}
    </div>
  );
};

export default Container;
