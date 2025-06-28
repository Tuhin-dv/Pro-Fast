const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
 const { ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.zg1bslu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        const db = client.db('parcelDB');
        const parcelsCollection = db.collection('parcels');

        // ✅ GET parcels (all or filtered by userEmail)
        app.get('/parcels', async (req, res) => {
            try {
                const userEmail = req.query.userEmail;
                const query = userEmail ? { userEmail: userEmail } : {};
                const options = { sort: { _id: -1 } };
                const parcels = await parcelsCollection.find(query, options).toArray();

                res.send(parcels);
            } catch (err) {
                console.error("❌ Error fetching parcels:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });

        // ✅ POST parcel
        app.post('/parcels', async (req, res) => {
            const newParcel = req.body;
            try {
                const result = await parcelsCollection.insertOne(newParcel);
                res.json({
                    success: true,
                    message: 'Parcel added successfully',
                    insertedId: result.insertedId
                });
            } catch (err) {
                res.status(500).json({
                    success: false,
                    message: 'Failed to add parcel',
                    error: err.message
                });
            }
        });



        // DELETE a parcel by ID
        app.delete('/parcels/:id', async (req, res) => {
            const id = req.params.id;

            try {
                const result = await parcelsCollection.deleteOne({ _id: new ObjectId(id) });

                if (result.deletedCount > 0) {
                    res.json({ success: true, message: "Parcel deleted successfully." });
                } else {
                    res.status(404).json({ success: false, message: "Parcel not found." });
                }
            } catch (error) {
                console.error("Error deleting parcel:", error);
                res.status(500).json({ success: false, message: "Server error.", error: error.message });
            }
        });


        await client.db("admin").command({ ping: 1 });
        console.log("✅ Successfully connected to MongoDB");
    } finally {
        // keep connection alive
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Zapshift Server is running');
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
