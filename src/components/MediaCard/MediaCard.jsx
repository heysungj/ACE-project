export default function MediaCard({ media }) {
  const url = media.fields.file.url;
  //   console.log(url);

  return (
    <div>
      <img src={url} alt="" width="300" height="300" />
    </div>
  );
}
