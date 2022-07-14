import './youtubeEmbed.css';

export default function YoutubeEmbed({ embedId }) {
  return (
    <div className='video-responsive'>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        title='Embedded Youtube'
        width='853'
        height='480'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}
