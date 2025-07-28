export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-8 sm:size-9 lg:size-10">
        <img
          src="cute-panda.jpeg"
          alt="logo-of-panda"
          className="size-full rounded-full"
        />
      </div>
      <div className="text-xl font-semibold">Userly</div>
    </div>
  )
}
