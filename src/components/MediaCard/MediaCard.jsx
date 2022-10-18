export default function MediaCard({ media }) {
  console.log(media);
  return (
    <div>
      <iframe width="560" height="315" src={media.fields.file.url}></iframe>
    </div>
  );
}
