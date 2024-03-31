
export default function PlusIcon({ onClick }: { onClick: () => void }) {
    return (
        <button className="w-10 h-10 bg-blue-500 relative rounded-full p-5 m-1" onClick={onClick}>
            <div className="w-5 h-1 bg-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" >
            </div>
            <div className="w-1 h-5 bg-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" >
            </div>
        </button>
    )
}