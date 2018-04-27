require("minitest/autorun")
require("minitest/rg")
require('pry')

require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class CardTest < MiniTest::Test

  def setup()
    @card1 = Card.new("Hearts", 5)
    @card2 = Card.new("Diamonds", 9)
    @card3 = Card.new("Spades", 1)
    @cardgame = CardGame.new([@card1, @card2, @card3])
  end

  def test_checkforace()
    assert_equal(true, @cardgame.checkforace(@card3))
  end
  #
  def test_highestcard()
    assert_equal("Diamonds", @cardgame.highest_card(@card1, @card2))
  end
  #
  def test_cards_total()
    assert_equal("You have a total of 15.", @cardgame.cards_total([@card1, @card2, @card3]))
  end

end
