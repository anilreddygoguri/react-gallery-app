import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onClickThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageDetails
  const OnClickThumbnailImage = () => {
    onClickThumbnail(id)
  }
  const isActiveAddClassName = isActive ? 'thumbnail-active' : 'thumbnail'
  return (
    <li className="thumbnail-items">
      <button className="button" type="submit" onClick={OnClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveAddClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
