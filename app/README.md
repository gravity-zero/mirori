
## Liste des routes


Pour toutes les routes, il faut passer en header :

nom du header : 'Authorization'
valeur du header :'Bearer + JWT valide'

```http
  GET  /event/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           |          | récupérer tous les évènements |


```http
  POST  /event/new/{user}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `int`  | Id du user pour créer un évènement qui lui sera lié |

```http
  GET  /event/{id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `id`      | `int`    | récupérer un évènement grâce à son id |

```http
  PATCH/PUT  /event/{id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `id`      | `int`    | modifier un évènement grâce à son id  |


```http
  GET  /user/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           |          | récupérer tous les users |

```http
  GET  /user/search/exposant
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           |          | récupérer tous les exposant |


```http
  GET  /user/search/visitor
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           |          | récupérer tous les visitor |


```http
  GET  /user/search/organisateur
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           |          | récupérer tous les orga |

```http
  POST  /user/new/{type}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`    | `string` | créer un utilisateur en fonction de son type (exposant, orga, visiteur) |

```http
  POST  /user/{id}/event/new/{event}
```

| Parameter     | Type          | Description                           |
| :--------     | :-------      | :--------------------------------     |
| `id`, `event` | `int`, `int`  | attribuer un évènement à un utilisateur |

```http
  GET   /user/email/{email}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `email`   | `string` | récupérer l'id d'un user grâce à son email  |

```http
  PATCH/PUT  /user/{id}/edit
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `id`      | `int`    | modifier un user grâce à son id  |
