import { Avatar, Button, Card as PaperCard, Paragraph } from 'react-native-paper';
import { FolderIcon } from '../Svg/FolderIcon';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon={FolderIcon} />;

export interface CardProps {
  title: string;
  content: string;
  image: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Card = ({ title, content, image, onCancel, onConfirm }: CardProps) => (
  <PaperCard>
    <PaperCard.Title title={title} subtitle='' left={LeftContent} />
    <PaperCard.Content>
      <Paragraph>{content}</Paragraph>
    </PaperCard.Content>
    <PaperCard.Cover source={{ uri: require('./picture.png') }} resizeMethod='scale'></PaperCard.Cover>
    <PaperCard.Actions>
      <Button onPress={onCancel}>Cancel</Button>
      <Button onPress={onConfirm}>OK</Button>
    </PaperCard.Actions>
  </PaperCard>
);
