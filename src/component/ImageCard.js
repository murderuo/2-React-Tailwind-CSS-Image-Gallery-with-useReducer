function ImageCard({ image }) {
  // console.log(image);

  const tags = image.tags.split(',');

  return (
    // <div>{JSON.stringify(image)}</div>
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>Views : {image.views}</li>
            <li>Likes :{image.likes}</li>
            <li>
              Downloads :{image.downloads}{' '}
              <a href={image.largeImageURL} download>
                <span className="inline-block bg-blue-200 rounded-sm px-1 py-0.7">Dowload Image</span>
              </a>{' '}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag,index )=> (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageCard;
