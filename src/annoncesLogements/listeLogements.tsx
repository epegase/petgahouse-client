import db_logements from "../db";
import { useState } from "react";
import { List, Avatar, Button } from "antd";
import "../styles/ListeLogements.css";

const ListeLogements = () => {
  const [list, setList] = useState(db_logements);
  const supprimerLogement = (id: String) => {
    setList(list.filter((log) => log.id !== id));
  };

  return (
    <div className="listelogements">
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(log) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                danger
                onClick={() => supprimerLogement(log.id)}
              >
                Supprimer
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={log.image} shape="square" size={48} />}
              title={log.titre}
              description={log.adresse}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListeLogements;

/*
<ul>
        {list.map((log) => (
          <li key={log.id}>
            <AnnonceLogement titre={log.titre} adresse={log.adresse} />
            <button onClick={() => supprimerLogement(log.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
*/
