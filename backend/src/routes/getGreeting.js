const GREETING = 'Central Wheel 2!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
