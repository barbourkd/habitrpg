/**
 * Created by Sabe on 7/7/2015.
 */
(function(){
  angular
    .module('habitrpg')
    .factory('Quests', questsFactory);

  questsFactory.$inject = [
    'User'
  ];

  function questsFactory(User) {

    var user = User.user;

    function lockQuest(quest) {
      if (quest.lvl && user.stats.lvl < quest.lvl) return true;
      if (user.achievements.quests) return (quest.previous && !user.achievements.quests[quest.previous]);
      if (quest.previous) return true;
      else return false;
    }

    return {
      lockQuest: lockQuest
    }
  }
}());
