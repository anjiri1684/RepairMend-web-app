import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4 ">
      <div className="px-2 w-full">
        <h2 className="text-2xl"> Page Not Found</h2>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Image
          className="m-0 rounded-xl"
          src="/images/not-found-1024x1024.png"
          width={300}
          height={300}
          alt="not found"
          sizes="300px"
          priority={true}
          title="Page not found"
        />
      </div>
    </div>
  );
}
