#!/bin/bash

# Add CTA to all service page pricing boxes

# Bath Vanity
sed -i '' '/<p className="text-2xl font-orbitron font-bold mb-2">90% Savings<\/p>/,/<\/div>/ {
  /<\/p>$/a\
                <p className="font-jost mt-2 text-sm opacity-90">\
                  Call (310) 742-0057 for your free quote\
                </p>
}' src/pages/services/BathVanity.tsx

# Enclosure Refinishing  
sed -i '' '/<p className="text-2xl font-orbitron font-bold mb-2">90% Savings<\/p>/,/<\/div>/ {
  /<\/p>$/a\
                <p className="font-jost mt-2 text-sm opacity-90">\
                  Call (310) 742-0057 for your free quote\
                </p>
}' src/pages/services/EnclosureRefinishing.tsx

echo "CTAs added to all pricing boxes!"
