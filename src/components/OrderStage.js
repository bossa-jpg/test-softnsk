export const OrderStage = ({ icon, description }) => {
  return (
    <div className="stage_item">
      <div className="circle">{icon}</div>
      <p className="description">{description}</p>
    </div>
  );
};
