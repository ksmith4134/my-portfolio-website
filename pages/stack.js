import { jamStack } from "../data/data"

export default function stack(props) {

    const {jamStack} = props

    return (
        <div className="mt-16 px-8">
            <div className="grid grid-cols-2 gap-8 font-bold">
                {jamStack.map((item) => (
                    <div key={item.id}>
                        {item.label}
                    </div>
                ))}
            </div>

        </div>
    )
}

export async function getStaticProps () {

  return {
    props: {
        jamStack
    }
  }
}