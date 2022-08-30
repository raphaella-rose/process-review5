# process-review5

work for a school reports company
help teachers find out how students did on tests
aim to assist teachers in understanding students performance over multiple tests in a given year
build a system that accepts multiple test entries and reports on each test entry

input => output

add_scores("Green, Amber, Red") add_scores("Amber, Amber, Green") generate_report() => "Test 1: \nAmber: 1 \nRed: 1\nTest 2: \nGreen: 1\nAmber: 2"

add_scores("Green") generate_report() => "Test 1: \nGreen: 1"

add_scores("Green, Amber") generate_report() => "Test 1: \nGreen: 1 \nAmber: 1"

add_scores("GrEen") generate_report() => "Test 1: \nGreen: 1"

add_scores("") generate_report() => "No results given"