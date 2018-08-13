class BoxSTOPBehavior extends Sup.Behavior {
  awake() {
    this.actor.setParent(Sup.getActor("Map"));
  }

  update() {
    
  }
}
Sup.registerBehavior(BoxSTOPBehavior);
