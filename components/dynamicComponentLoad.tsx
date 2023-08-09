// fixed for hydration error
export function ParagraphComponent(props: any) {
  return (
    <p
      style={{ color: props.color }}
      dangerouslySetInnerHTML={{ __html: props.children! }}
      className={`${props.className} ${props.size} ${props.weight} dark:text-zinc-300 text-zinc-700 ${props.extra}`}
    ></p>
  );
}
