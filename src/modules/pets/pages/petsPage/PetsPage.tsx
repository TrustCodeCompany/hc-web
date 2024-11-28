import PetsList from '../../components/petList/PetsList';
import './petsPage.css';

const PetsPage = () => {
  return (
    <div>
      <h1 className="main-title">Pets</h1>
      <PetsList />
    </div>
  );
};

export default PetsPage;