import PropTypes from "prop-types";

const ExpirationMessage = ({ expiration_message }) => {
  return <p className="expiration_message">{expiration_message}</p>;
};

ExpirationMessage.propTypes = {
  expiration_message: PropTypes.string,
};

export default ExpirationMessage;
