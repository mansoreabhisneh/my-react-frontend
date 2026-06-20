import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const { Name, Email, Phone, Tattoo_Idea } = req.body;

    const response = await fetch('https://sheetdb.io/api/v1/wc7onoap3geft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [{ Name, Email, Phone, Tattoo_Idea }]
      })
    });

    if (!response.ok) {
      throw new Error(`SheetDB API returned ${response.status}`);
    }

    const data = await response.json();
    res.json({ success: true, data });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Registration server running on http://localhost:${PORT}`);
});
