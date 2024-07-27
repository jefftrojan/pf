
export function Contact() {
  return (
    <div className="bg-[#1e1e1e] text-[#d4d4d4] font-mono rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#252526] px-4 py-2 flex items-center">
        <span className="text-[#6a9955] mr-2">$</span>
        <span className="text-[#d4d4d4]">./contact_me</span>
      </div>
      <form className="p-4 space-y-4">
        <div className="flex items-center">
          <span className="text-[#6a9955] mr-2">&gt;</span>
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-none outline-none text-[#d4d4d4] w-full"
          />
        </div>
        <div className="flex items-center">
          <span className="text-[#6a9955] mr-2">&gt;</span>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-none outline-none text-[#d4d4d4] w-full"
          />
        </div>
        <div className="flex items-start">
          <span className="text-[#6a9955] mr-2 mt-2">&gt;</span>
          <textarea
            placeholder="Message"
            className="bg-transparent border-none outline-none text-[#d4d4d4] w-full resize-none"
            rows={3}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-[#6a9955] text-[#1e1e1e] px-4 py-2 rounded hover:bg-[#507d40]">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
