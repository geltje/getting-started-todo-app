const GREETING = 'Central Wheel!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
