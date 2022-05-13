interface IProps {
  src: string;
}

const Avatar = ({ src }: IProps) => {
  return (
    <div className="">
      <img className="w-6" src={src} alt="avatar" />
    </div>
  );
};

export default Avatar;
