import { Card, CycleName, Span, EditButton, DataContainer,
ButtonContainer, 
DeleteButton} from './style'
import EditIcon from '../../assets/img/Edit.png';
import DeleteIcon from '../../assets/img/Delete.png';

const CycleCard = (props: any) => {
    return (
        <>
            <Card>
                <DataContainer>
                    <CycleName>{ props.title }</CycleName>
                    <Span>Complemed Tasks: 15</Span>
                    <br />
                    <Span>Complemed Tasks: 15</Span>
                </DataContainer>
                <ButtonContainer>
                    <EditButton>
                        <img src={EditIcon} width={20} height={20} alt="Edit Icon" draggable={false}/>
                    </EditButton>
                    <DeleteButton>
                        <img src={DeleteIcon} width={25} height={25} alt="Edit Icon" draggable={false}/>
                    </DeleteButton>
                </ButtonContainer>
                
            </Card>
        </>
    )
}

export default CycleCard;