function Mouse(name) {
	this.name = name;
}

Mouse.prototype.die = fucntion(){
	this.dead = true;
};

module.exports = Mouse;