export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img
          src="https://raw.githubusercontent.com/sahandghavidel/realtor-clone-react/b50f6a27f7608cd9a245725e86a48067a0f2368a/src/assets/svg/spinner.svg"
          alt="loading"
          className="w-24 h-24"
        />
      </div>
    </div>
  );
}
