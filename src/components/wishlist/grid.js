export default function Grid ({ columns, gap, children }) {
  return (
    <div style={{ columnCount: columns, columnGap: gap }}>
      {children.map(child => (
        <div className='inline-block mb-4 w-full' key={child.key}>
          {child}
        </div>
      ))}
    </div>
  )
}
