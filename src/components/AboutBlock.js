export const AboutBlock = () => {
  return (
    <div className="about-block">
      <div className="about-block_content">
        <h2 className="title">
          <span>Lorem ipsum</span> dolor sit <br /> amet consectetur{" "}
          <span>adipiscing</span>
        </h2>
        <div className="description">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
          <ul>
            <li>Totam rem aperiam eaque ipsa</li>
            <li>Sit voluptatem accusantium doloremque laudantium</li>
            <li>Sed ut perspiciatis, unde omnis iste natus error</li>
          </ul>
        </div>
        <div className="buttons">
          <button className="button order-button">заказать</button>
          <button className="button more-button">подробнее</button>
        </div>
      </div>
    </div>
  );
};
