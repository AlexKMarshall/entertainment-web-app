type Props = {
  title: string
  year: number
  category: string
  rating: string
}

export function MediaCard({
  title,
  year,
  category,
  rating,
}: Props): JSX.Element {
  return (
    <article>
      <dl>
        <dt>Year released</dt>
        <dd>{year}</dd>
        <dt>Category</dt>
        <dd>{category}</dd>
        <dt>Age rating</dt>
        <dd>{rating}</dd>
      </dl>
      <h3>{title}</h3>
    </article>
  )
}
