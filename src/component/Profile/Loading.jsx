
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"
        />
        <div
          className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-green-700 border-t-transparent"
        />
      </div>
    </div>
  )
}

export default Loading