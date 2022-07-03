import React, { useState } from 'react';
import Card from '../../components/card/card';
import { exhibitorsFixtures } from '../../fixtures/exhibitorsFixtures';
import { IExhibitors } from '../../models/exhibitors.interface'


const Exhibitors: React.FC = () => {

  const [exhibitors, setExhibitors] = useState<IExhibitors[]>(exhibitorsFixtures.exhibitors)

  return (
    <div>
      {exhibitors.map((exhibitor) => (
        <Card
          key={`row-${exhibitor.exhibitorId}`}
          image={exhibitor.picture}
          name={exhibitor.name}
          category={exhibitor.category}
          emplacement={exhibitor.emplacement}
        />
      ))}
    </div>

  )
}

export default Exhibitors;
