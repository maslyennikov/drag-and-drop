import { Layout } from 'react-grid-layout';

interface IStore {
    app: App
}

export interface App {
    activeConfigurationLayout: Layout[];
}

export default IStore;
