interface IProps {
  src: string;
  setOpened?: (arg0: boolean) => void;
}

const ActivePreview = ({ src, setOpened }: IProps) => {
  return (
    <>
      <img
        src={src}
        alt="main preview"
        className="box-border block max-h-72 w-full object-cover object-center sm:max-h-96 md:max-h-full md:rounded-2xl"
        onClick={() => setOpened && setOpened(true)}
      />
    </>
  );
};

export default ActivePreview;
