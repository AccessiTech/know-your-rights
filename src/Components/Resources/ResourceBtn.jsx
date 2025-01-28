import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function ResourceBtn({ source, data, setModalContent, setShowModal }) {
  return (
    <Button
      variant="primary"
      size="lg"
      className="resource-btn"
      href={data.source}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (data.links) {
          e.preventDefault();
          setModalContent({
            ...data,
            sourceName: source,
          });
          setShowModal(true);
        }
      }}
    >
      {data.title}
    </Button>
  );
}

ResourceBtn.prototype = {
  source: PropTypes.string,
  data: PropTypes.object,
  setModalContent: PropTypes.func,
  setShowModal: PropTypes.func,
};

export default ResourceBtn;
