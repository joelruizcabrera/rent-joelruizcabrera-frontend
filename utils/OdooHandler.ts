/*import { OdooClient, OdooError } from 'odoo-xmlrpc-ts';


interface Partner {
    id: number;
    name: string;
    email?: string;
    is_company: boolean;
}

const client = new OdooClient({
    url: 'https://joelruizcabrera.odoo.com',
    db: 'joelruizcabrera',
    username: 'joelruizcabrera',
    password: 'd9in3Ke7!Joel',
});

export class OdooHandler {
    async example() {
        try {
            // Search and read partners
            const partners = await client.searchRead<Partner>('res.partner', [['is_company', '=', true]], {
                fields: ['name', 'email'],
                limit: 10,
            });

            console.log('Partners:', partners);
        } catch (error) {
            if (error instanceof OdooError) {
                console.error('Odoo Error:', error.message);
            }
        }
    }
}*/