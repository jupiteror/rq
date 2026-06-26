type PropsType = {
  classname?: string;
  src: string;
};

export function Image({ classname, src }: PropsType) {
  return <img src={`${src}`} alt="title" className={`${classname}`} />;
}
