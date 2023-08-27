import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterCreation from './components/CharacterCreation';
import World from './components/World';
import Combat from './components/Combat';
import Chat from './components/Chat';
import Trade from './components/Trade';
import Marketplace from './components/Marketplace';
import Guild from './components/Guild';
import Profile from './components/Profile';
import Inventory from './components/Inventory';
import SkillTree from './components/SkillTree';
import Crafting from './components/Crafting';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character-creation" component={CharacterCreation} />
        <Route path="/world" component={World} />
        <Route path="/combat" component={Combat} />
        <Route path="/chat" component={Chat} />
        <Route path="/trade" component={Trade} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/guild" component={Guild} />
        <Route path="/profile" component={Profile} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/skill-tree" component={SkillTree} />
        <Route path="/crafting" component={Crafting} />
      </Switch>
    </Router>
  );
}

export default App;