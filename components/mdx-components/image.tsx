import Image from 'next/image';

type imageProps = {
  src: string;
  className: string;
  alt: string;
};
export default function ImageComponent(props: imageProps) {
  return (
    <div className="relative w-full h-96">
      <Image
        {...props}
        layout="fill"
        className="fadeInBrightness"
        objectFit="cover"
      />
    </div>
  );
}