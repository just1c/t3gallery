import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/194f85f3-f8ec-4770-89f3-08c8e3383f07-lqlmh8.jpg",
  "https://utfs.io/f/33893917-831b-41f5-8cba-172e6ac11f55-m9rgai.jpg",
  "https://utfs.io/f/0dd4c721-df78-4cb3-b430-44193b36fe73-25sfea.jpg",
  "https://utfs.io/f/eea0742a-1c7c-44e2-b70f-d05c8cb6ed40-6mli3j.jpg",
  "https://utfs.io/f/734c797f-230e-49bc-8474-12b88209ac98-9x7lp4.jpg"
]

const mockImages = mockUrls.map((url,index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-40 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))
      }</div>
    </main>
  );
}
