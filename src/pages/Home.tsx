import { useEffect, useState } from 'react';
import { Button, Grid, Input, Flex, Modal, Text, Group } from '@mantine/core';
import { Checkbox } from '../components';
import { IconCheck, IconList, IconPencil, IconPlus, IconTrash, IconX, IconInfoCircleFilled } from '@tabler/icons-react';
import { IItems } from '../interfaces';
import { axios } from "../services";
import { Notifications, notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';

export function Home() {
  const [items, setItems] = useState<IItems[]>([]);
  const [input, setInput] = useState<string>('');
  const [inputEdit, setInputEdit] = useState<string>('');
  const [updateList, setUpdateList] = useState<boolean>();
  const [openedDeleteAllItems, { close: closeDeleteAllItems, open: openDeleteAllItems }] = useDisclosure(false);
  const [openedEditItem, { close: closeEditItem, open: openEditItem }] = useDisclosure(false);

  useEffect(() => {
    const getAllItems = async () => {
      await axios.get('items')
        .then(response => setItems(response.data))
        .catch(error => console.log(error));
    }
    getAllItems();
  }, [updateList]);

  const createItem = async (name: string) => {
    if(name.length < 0) return;

    notifications.show({
      id: `createItem-${name}`,
      loading: true,
      title: 'Adicionando item na lista',
      message: `O item "${name}" está sendo adicionado na lista.`,
      autoClose: false,
      withCloseButton: false,
    });

    await axios.post('items', { name: name})
      .then(() => {
        notifications.update({
          id: `createItem-${name}`,
          color: 'teal',
          title: 'Item adicionado com sucesso',
          message: `O item "${name}" foi adicionado na lista.`,
          icon: <IconCheck size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
        setInput('');
        setUpdateList(!updateList);
      })
      .catch(error => {
        console.log(error);
        notifications.update({
          id: `createItem-${name}`,
          color: 'red',
          title: 'Erro ao adicionar item na lista',
          message: `Não foi possível adicionar o tem "${name}" na lista.`,
          icon: <IconX size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
      });
  };

  const deleteItem = async (item: IItems) => {
    notifications.show({
      id: `deleteItem-${item.id}`,
      loading: true,
      title: 'Excluindo item da lista',
      message: `O item "${item.name}" está sendo excluído da lista.`,
      autoClose: false,
      withCloseButton: false,
    });
    await axios.delete(`items/${item.id}`)
      .then(() => {
        notifications.update({
          id: `deleteItem-${item.id}`,
          color: 'light',
          title: 'Item excluído com sucesso',
          message: `O item "${item.name}" foi excluído da lista.`,
          icon: <IconInfoCircleFilled size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
        setUpdateList(!updateList);
      })
      .catch(error => {
        console.log(error);
        notifications.update({
          id: `deleteItem-${item.id}`,
          color: 'red',
          title: 'Erro ao excluir item da lista',
          message: `Não foi possível excluir o tem "${item.name}" da lista.`,
          icon: <IconX size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
      });
  };

  const deleteAllItems = async () => {
    notifications.show({
      id: 'deleteAllItems',
      loading: true,
      title: 'Excluindo toda a lista',
      message: 'Excluindo toda a lista',
      autoClose: false,
      withCloseButton: false,
    });
    await axios.delete('items')
      .then(() => {
        notifications.update({
          id: 'deleteAllItems',
          color: 'light',
          title: 'Todos os items excluídos com sucesso',
          message: `Os items foram excluídos da lista.`,
          icon: <IconInfoCircleFilled size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
        setUpdateList(!updateList);
        closeDeleteAllItems();
      })
      .catch(error => {
        console.log(error);
        notifications.update({
          id: 'deleteAllItems',
          color: 'red',
          title: 'Erro ao limpar a lista',
          message: `Não foi possível excluir os items da lista.`,
          icon: <IconX size="1rem" />,
          autoClose: 3000,
          withCloseButton: false,
        });
      });
  };

  return (
    <>
      <Notifications position="top-center"/>
      <Modal opened={openedDeleteAllItems} onClose={close} size="auto" title="Excluir todos os items">
        <Text>Tem certeza que deseja excluir todos os items da lista?</Text>
        <Flex justify='end'>
          <Group mt="xl">
            <Button variant="outline" color='red' onClick={() => { deleteAllItems() }}>
              Sim
            </Button>
            <Button variant="filled" onClick={close}>
              Não
            </Button>
          </Group>
        </Flex>
      </Modal>
      <Modal opened={openedEditItem} onClose={closeEditItem} size="md" title="Atualizar item">
          <Input
            placeholder="Digite o nome do item"
            value={inputEdit}
            onChange={(e) => setInputEdit(e.target.value)}
          />
        <Flex justify='end'>
          <Group mt="xl">
            <Button variant="filled" onClick={() => { }}>
              Salvar
            </Button>
            <Button variant="subtle" onClick={closeEditItem}>
              Cancelar
            </Button>
          </Group>
        </Flex>
      </Modal>
      <Grid justify="center" align="center" style={{marginTop: '10px'}}>
        <Grid.Col span={10} style={{maxWidth: '420px'}}>
          <Input
            icon={<IconList />}
            placeholder="Digite o nome do item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.length > 0) {
                createItem(input);
              }
            }}
          />
        </Grid.Col>
      </Grid>
      <Grid justify="center" align="center" style={{marginTop: '10px'}}>
        <Grid.Col span={10} style={{maxWidth: '420px'}}>
          <Flex justify='center' gap={'sm'} align="center">
            <Button
              fullWidth
              variant="filled"
              disabled={input.length <= 0}
              onClick={() => createItem(input)}
            >
              <IconPlus /> &nbsp; Adicionar item
            </Button>
            <Button
              fullWidth
              variant="filled"
              color="red"
              disabled={items.length <= 0}
              onClick={openDeleteAllItems}
              >
              <IconTrash /> &nbsp; Limpar lista
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
      {items.map((item, index) => (
        <Grid key={item.name} justify="center" align="center" style={{marginTop: '20px'}}>
          <Grid.Col span={7} style={{height: '45px', maxWidth: '300px', backgroundColor: `${index % 2 === 0 ? '#FFFFFF' : '#E9ECEF50'}`}}>
            <Checkbox label={item.name} checked={item.checked}/>
          </Grid.Col>
          <Grid.Col span={3} style={{height: '45px', maxWidth: '120px', backgroundColor: `${index % 2 === 0 ? '#FFFFFF' : '#E9ECEF50'}`}}>
            <Flex justify='end' gap={'sm'} align="center" style={{marginTop: '2px'}}>
              <Button
                variant="outline"
                compact
                onClick={() => {
                  setInputEdit(item.name);
                  openEditItem();
                }}
              >
                <IconPencil />
              </Button>
              <Button 
                variant="outline"
                color="red"
                compact
                onClick={() => {
                  deleteItem(item)
                }}
                >
                  <IconTrash />
                </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      ))}
    </>
  )
};