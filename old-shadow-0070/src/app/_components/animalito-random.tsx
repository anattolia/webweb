import Image from "next/image";

type Props = {
  imagen: string;
  posRight: number;
  posBottom: number;
  //onDrag: () => void;
};

export function AnimalitoRandom({ imagen, posRight, posBottom }: Props) {
  function onDrag() {
    posRight = 20;
  }

  return (
    <Image
      className={`absolute`}
      style={{ bottom: posBottom, right: posRight }}
      onClick={onDrag}
      aria-hidden
      src={imagen}
      alt="File icon"
      width={20}
      height={20}
    />
  );
}
