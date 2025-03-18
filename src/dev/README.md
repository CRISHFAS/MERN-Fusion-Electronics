Este directorio contiene archivos de utilidad que habilitan algunas funciones visuales del plugin [React Buddy](https://plugins.jetbrains.com/plugin/17467-react-buddy/). Los archivos de este directorio deben estar asignados al control de código fuente.

Las paletas de React Buddy describen componentes reutilizables y bloques de construcción. La ventana de herramientas "Paleta de React" se activa cuando un editor con componentes de React está activo. Puedes arrastrar y soltar elementos desde la ventana de herramientas al editor de código o al esquema JSX. También puedes insertar componentes desde la paleta mediante la acción de generación de código. (`alt+insert` / `⌘ N`).

Añade componentes a la paleta usando la intención "Añadir a la paleta de React" o a través del editor de paletas (busca el enlace correspondiente en "palette.tsx"). Existen paletas listas para usar para bibliotecas populares de React, publicadas como paquetes npm, que pueden añadirse como dependencia:

```jsx
import AntdPalette from '@react-buddy/palette-antd';
import ReactIntlPalette from '@react-buddy/palette-react-intl';

export const PaletteTree = () => (
  <Palette>
    <AntdPalette />
    <ReactIntlPalette />
    <Category name="App templates">
      <Component name="Card">
        <Variant name="Loading">
          <Card title="Card title">
            <Skeleton loading={true} avatar active>
              Contenido de la tarjeta
            </Skeleton>
          </Card>
        </Variant>
      </Component>
      <Component name="Form">
        <Variant proto={FormTemplate} />
      </Component>
    </Category>
  </Palette>
);
```

React Buddy registra explícitamente cualquier componente previsualizado en el archivo `previews.tsx` para que puedas especificar las propiedades requeridas..

```jsx
<ComponentPreview path="/Page">
  <Page title={'Hello'} />
</ComponentPreview>
```

Puede agregar alguna lógica de inicialización global para el modo de vista previa en `useInitital.ts`, por ejemplo, obtener implícitamente la sesión del usuario:

```typescript
export const useInitial: () => InitialHookStatus = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function login() {
      const response = await loginRequest(DEV_LOGIN, DEV_PASSWORD);
      if (response?.status !== 200) {
        setError(true);
      }
      setLoading(false);
    }
    login();
  }, []);
  return { loading, error };
};
```
