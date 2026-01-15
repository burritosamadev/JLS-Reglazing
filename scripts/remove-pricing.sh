#!/bin/bash

# Remove specific pricing from all service pages and ensure 90% savings consistency

# Kitchen Refinishing - $400-$800
sed -i '' 's/Kitchen countertop refinishing costs \$400-\$800 depending on size and condition\. This is significantly less expensive than countertop replacement (\$2,000-\$5,000), making it ideal for rental property updates\./Kitchen countertop refinishing costs up to 90% less than full replacement. The exact cost depends on the size, condition, and materials. Contact us at (310) 742-0057 for a free quote. This makes it ideal for rental property updates./g' src/pages/services/KitchenRefinishing.tsx

sed -i '' 's/description="Expert kitchen countertop refinishing for tile and laminate surfaces\. Professional kitchen reglazing \$400-\$800\. Perfect for rental properties\. 24-hour service\."/description="Expert kitchen countertop refinishing for tile and laminate surfaces. Save up to 90% vs replacement. Perfect for rental properties. 24-hour service. Free quotes."/g' src/pages/services/KitchenRefinishing.tsx

sed -i '' 's/<p className="text-2xl font-orbitron font-bold mb-2">\$400-\$800<\/p>/<p className="text-2xl font-orbitron font-bold mb-2">90% Savings<\/p>/g' src/pages/services/KitchenRefinishing.tsx

sed -i '' 's/and laminate countertops to like-new condition for \$400-\$800 in just 24 hours\./and laminate countertops to like-new condition at a fraction of replacement cost in just 24 hours./g' src/pages/services/KitchenRefinishing.tsx

# Crack Repair - $100-$300
sed -i '' 's/Crack and chip repair costs \$100-\$300 depending on size and severity\. This preventive repair is significantly less than refinishing (\$300-\$600) or replacement, making it essential for rental property maintenance\./Crack and chip repair is an affordable preventive service that costs significantly less than full refinishing or replacement. Contact us at (310) 742-0057 for a free quote. This makes it essential for rental property maintenance./g' src/pages/services/CrackRepair.tsx

sed -i '' 's/description="Expert crack and chip repair for bathtubs, sinks, countertops\. Professional damage repair \$100-\$300\. Prevent small cracks from worsening\. Same-day service available\."/description="Expert crack and chip repair for bathtubs, sinks, countertops. Affordable preventive repair service. Prevent small cracks from worsening. Same-day service. Free quotes."/g' src/pages/services/CrackRepair.tsx

sed -i '' 's/<p className="text-2xl font-orbitron font-bold mb-2">\$100-\$300<\/p>/<p className="text-2xl font-orbitron font-bold mb-2">Affordable<\/p>/g' src/pages/services/CrackRepair.tsx

sed -i '' 's/spreading\. For just \$100-\$300, property managers could repair cracks before they/spreading. At an affordable cost, property managers could repair cracks before they/g' src/pages/services/CrackRepair.tsx

# Cut-Out Repairs - $500-$1,000
sed -i '' 's/Tub cut-out repairs cost \$500-\$1,000 depending on size and foundation damage\. This is essential preventive repair that avoids costly bathtub replacement (\$3,000-\$5,000) caused by foundation failure\./Tub cut-out and foundation repairs prevent costly bathtub replacement caused by foundation failure. The cost depends on the extent of damage and repairs needed. Contact us at (310) 742-0057 for a free quote./g' src/pages/services/CutOutRepairs.tsx

sed -i '' 's/description="Expert tub cut-out and foundation repairs\. Professional structural reinforcement \$500-\$1,000\. Prevent bathtub collapse and water damage with expert foundation repair\."/description="Expert tub cut-out and foundation repairs. Professional structural reinforcement prevents bathtub collapse and water damage. Save thousands vs replacement. Free quotes."/g' src/pages/services/CutOutRepairs.tsx

sed -i '' 's/<p className="text-2xl font-orbitron font-bold mb-2">\$500-\$1,000<\/p>/<p className="text-2xl font-orbitron font-bold mb-2">Save Thousands<\/p>/g' src/pages/services/CutOutRepairs.tsx

sed -i '' 's/and seamlessly repairing the access points for \$500-\$1,000\./and seamlessly repairing the access points at a fraction of replacement cost./g' src/pages/services/CutOutRepairs.tsx

# Bath Vanity - $250-$500
sed -i '' 's/Bath vanity refinishing costs \$250-\$500 depending on size and materials\. This is significantly less than vanity replacement (\$800-\$3,000), making it ideal for rental property bathroom updates\./Bath vanity refinishing costs up to 90% less than vanity replacement. The exact cost depends on size and materials. Contact us at (310) 742-0057 for a free quote. Ideal for rental property bathroom updates./g' src/pages/services/BathVanity.tsx

sed -i '' 's/description="Expert bath vanity refinishing for cultured marble and laminate\. Professional vanity reglazing \$250-\$500\. Restore bathroom vanities at fraction of replacement cost\."/description="Expert bath vanity refinishing for cultured marble and laminate. Save up to 90% vs replacement. Restore bathroom vanities beautifully. Free quotes."/g' src/pages/services/BathVanity.tsx

sed -i '' 's/<p className="text-2xl font-orbitron font-bold mb-2">\$250-\$500<\/p>/<p className="text-2xl font-orbitron font-bold mb-2">90% Savings<\/p>/g' src/pages/services/BathVanity.tsx

sed -i '' 's/\$250-\$500 in just hours\./at a fraction of replacement cost in just hours./g' src/pages/services/BathVanity.tsx

# Enclosure Refinishing - $400-$700
sed -i '' 's/Bathtub enclosure refinishing costs \$400-\$700 depending on size and tile condition\. This is significantly less than tile replacement (\$2,000-\$4,000), making it ideal for rental property bathroom updates\./Bathtub enclosure refinishing costs up to 90% less than tile replacement. The exact cost depends on size and tile condition. Contact us at (310) 742-0057 for a free quote. Ideal for rental property bathroom updates./g' src/pages/services/EnclosureRefinishing.tsx

sed -i '' 's/description="Expert bathtub enclosure refinishing for ceramic tile and fiberglass surrounds\. Professional tile reglazing \$400-\$700\. Restore tub walls at fraction of replacement cost\."/description="Expert bathtub enclosure refinishing for ceramic tile and fiberglass surrounds. Save up to 90% vs replacement. Restore tub walls beautifully. Free quotes."/g' src/pages/services/EnclosureRefinishing.tsx

sed -i '' 's/<p className="text-2xl font-orbitron font-bold mb-2">\$400-\$700<\/p>/<p className="text-2xl font-orbitron font-bold mb-2">90% Savings<\/p>/g' src/pages/services/EnclosureRefinishing.tsx

sed -i '' 's/walls and fiberglass surrounds in place for \$400-\$700 in just 24 hours\./walls and fiberglass surrounds in place at a fraction of replacement cost in just 24 hours./g' src/pages/services/EnclosureRefinishing.tsx

echo "Pricing removed and 90% savings messaging updated across all service pages!"
