type Logement = {
  titre: String;
  adresse: String;
};

const AnnonceLogement = (props: Logement) => {
  return (
    <div>
      <h3>{props.titre}</h3>
      <p>{props.adresse}</p>
    </div>
  );
};

export default AnnonceLogement;
