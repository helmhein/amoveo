from fork import *
from header import *
from lightning import *
from market import *
from share_blocks import *
from spend import *

test_header_single()
test_header_many()

test_mine_and_sync()
test_three()

spend_test()

lightning_test()

market_test()

share_blocks_test1()
share_blocks_test2()
print("finished tests\n")
